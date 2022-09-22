using DigitalBookAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DigitalBookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        DigitalBookDBContext db = new DigitalBookDBContext();

        [Route("createbook")]
        [HttpPost]
        public IActionResult Post([FromBody] TblCreatebook book)
        {
            db.TblCreatebooks.Add(book);

            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }

        [Route("getbook")]
        [HttpGet]
        public IEnumerable<TblCreatebook> Get()
        {
            return db.TblCreatebooks;
            //return db.TblCreatebooks.Where(x => x.AuthorEmail == cname).Select(x => x).ToList();
        }

        //public IEnumerable<>
        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var data = db.TblCreatebooks.Where(x => x.Id == id).FirstOrDefault();
            db.TblCreatebooks.Remove(data);
            db.SaveChanges();
            //
            var response = new { Status = "Success" };
            return Ok(response);
        }
    }
}
