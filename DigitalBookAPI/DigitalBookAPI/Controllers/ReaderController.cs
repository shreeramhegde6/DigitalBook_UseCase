using DigitalBookAPI.Models;
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

namespace DigitalBookAPI.Controllers
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
    }
}
