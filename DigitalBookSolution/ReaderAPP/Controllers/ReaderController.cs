using ReaderAPP.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReaderAPP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReaderController : ControllerBase
    {
        DigitalBookDBContext db = new DigitalBookDBContext();
        private IConfiguration _config;

        public ReaderController(IConfiguration config)
        {
            _config = config;
        }


        [HttpPost]
        [Route("readerlogin")]
        public IActionResult Login(TblReaderLogin login)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(login, false);
            if (user != null)
            {
                var tokenstring = GenerateToken(user);
                response = Ok(new { token = tokenstring });
            }
            return response;
        }

        private TblReaderLogin AuthenticateUser(TblReaderLogin login, bool IsRegister)
        {
            if (IsRegister)
            {
                db.TblReaderLogins.Add(login);
                db.SaveChanges();
                return login;
            }
            else
            {
                if (db.TblReaderLogins.Any(x => x.UserName == login.UserName && x.Password == login.Password))
                {
                    return db.TblReaderLogins.Where(x => x.UserName == login.UserName && x.Password == login.Password).FirstOrDefault();
                }
                else
                {
                    return null;
                }
            }

        }

        private string GenerateToken(TblReaderLogin login)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(_config["jwt:Issuer"],
                _config["jwt:Audience"],
                null,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpPost]
        [Route("register-reader")]
        public IActionResult Register(TblReaderLogin login)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateUser(login, true);
            if (user != null)
            {
                var tokenString = GenerateToken(user);
                response = Ok(new { token = tokenString });
            }
            return response;
        }



        [HttpPost]
        [Route("searchbook")]
        public IEnumerable<TblCreatebook> SearchBook([FromBody] SearchModel searchbook)
        {

            var curr = new DateTime();
            if (searchbook.Creationdate != "") { curr = Convert.ToDateTime(searchbook.Creationdate); }
            //DateTime curr = Convert.ToDateTime(searchbook.Creationdate);
            
            List<TblCreatebook> test = new List<TblCreatebook>();
            if (searchbook.Publisher == "" && searchbook.Title == "" && searchbook.Category == "")
            {
                test = db.TblCreatebooks.Where(x => x.Creationdate.Value.Date.ToString() == searchbook.Creationdate && x.ActiveFlag == true).Select(x => x).ToList();
            }

            else if (searchbook.Publisher == "" && searchbook.Title == "" && searchbook.Creationdate != "" && searchbook.Category!="")
            {
                test = db.TblCreatebooks.Where(x => x.Category == searchbook.Category && x.Creationdate.Value.Date.ToString() == searchbook.Creationdate  && x.ActiveFlag == true).Select(x => x).ToList();
            }

            else if (searchbook.Publisher == "" && searchbook.Title == "" && searchbook.Creationdate == "")
            {
                test = db.TblCreatebooks.Where(x => x.Category == searchbook.Category && x.ActiveFlag == true).Select(x => x).ToList();
            }
            else
            {
                test = db.TblCreatebooks.Where(x => x.Title == searchbook.Title && x.Publisher == searchbook.Publisher && x.Category == searchbook.Category && x.Creationdate == curr && x.ActiveFlag == true).Select(x => x).ToList();
            }
            // test = db.TblCreatebooks.Where(x => x.Title == searchbook.Title && x.Publisher == searchbook.Publisher && x.Category == searchbook.Category && x.Creationdate == curr).Select(x => x).ToList();

            //test = db.TblCreatebooks.Where(x => x.Title == searchbook.Title && x.Publisher == searchbook.Publisher && x.Category == searchbook.Category && x.Creationdate == curr).Select(x => x).ToList();
            return test;
        }

        [HttpPost]
        [Route("buybook")]
        public IActionResult Buybook([FromBody] TblBuybook bookadding)
        {
            IActionResult responce = Unauthorized();
            try
            {
                bookadding.Buydate = DateTime.Now;
                //var bookAdd = db.TblCreatebooks.Where(x => x.Id == bookadding.I).FirstOrDefault();
                //string[] img= bookadding.Image.Replace('\','/');
                //bookadding.Image = "";
                db.TblBuybooks.Add(bookadding);
                db.SaveChanges();
                responce = Ok(new { Status = "Success" });


            }
            catch
            {
                responce = Unauthorized();
            }
            return responce;

        }

        [HttpGet]
        [Route("viewbook")]
        public IEnumerable<TblBuybook> Get(string readername)
        {
            var ret = db.TblBuybooks.Where(x => x.User == readername).Select(x => x).OrderByDescending(x => x.Id).ToList();

            return ret;


        }

        [HttpDelete]
        [Route("returnbook")]
        public IActionResult Delete(int id)
        {

            IActionResult response = Unauthorized();
            var data = db.TblBuybooks.Where(x => x.Id == id).FirstOrDefault();
            var checkDate = data.Buydate;
            var diffHours = DateTime.Now - checkDate;
            if (diffHours.Value.Hours <= 24 && diffHours.Value.Days <= 0)
            {
                db.TblBuybooks.Remove(data);
                db.SaveChanges();

                response = Ok(new { Status = "Success" });
            }
            else
            {
                response = Unauthorized();
            }
            return response;
        }


        //[HttpPost]
        //[Route("searchbook")]
        //public IEnumerable<TblCreatebook> SearchBook([FromBody] SearchModel searchbook)
        //{
        //    DateTime curr = Convert.ToDateTime(searchbook.Creationdate);
        //    List<TblCreatebook> test = new List<TblCreatebook>();
        //    test = db.TblCreatebooks.Where(x => x.Title == searchbook.Title && x.Publisher == searchbook.Publisher && x.Category == searchbook.Category && x.Creationdate == curr).Select(x => x).ToList();
        //    return test;
        //}

        //[HttpPost]
        //[Route("buybook")]
        //public IActionResult Buybook([FromBody] TblBuybook bookadding)
        //{
        //    IActionResult responce = Unauthorized();
        //    try
        //    {
        //        //var bookAdd = db.TblCreatebooks.Where(x => x.Id == bookadding.I).FirstOrDefault();
        //        //string[] img= bookadding.Image.Replace('\','/');
        //        //bookadding.Image = "";
        //        db.TblBuybooks.Add(bookadding);
        //        db.SaveChanges();
        //        responce = Ok(new { Status = "Success" });


        //    }
        //    catch
        //    {
        //        responce = Unauthorized();
        //    }
        //    return responce;

        //}

        //[HttpGet]
        //[Route("viewbook")]
        //public IEnumerable<TblBuybook> Get(string readername)
        //{
        //    var ret = db.TblBuybooks.Where(x => x.User == readername).Select(x => x).OrderByDescending(x => x.Id).ToList();

        //    return ret;


        //}

        //[HttpDelete]
        //[Route("returnbook")]
        //public IActionResult Delete(int id)
        //{
        //    var data = db.TblBuybooks.Where(x => x.Id == id).FirstOrDefault();
        //    db.TblBuybooks.Remove(data);
        //    db.SaveChanges();
        //    //
        //    var response = new { Status = "Success" };
        //    return Ok(response);
        //}
    }
}
