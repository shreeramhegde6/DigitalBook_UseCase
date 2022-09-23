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
    public class DataController : ControllerBase
    {

        DigitalBookDBContext db = new DigitalBookDBContext();

        [HttpPost]
        [Route("register-Dat")]
        public IActionResult Register(TblLoginFlag login)
        {
            IActionResult response = Unauthorized();
            login.Creationdate = DateTime.Today;

            db.TblLoginFlags.Add(login);
            db.SaveChanges();
            // return login;
            // var user = AuthenticateUser(login, true);
            //if (user != null)
            //{
            //    var tokenString = GenerateToken(user);
            //    response = Ok(new { token = tokenString });
            //}
            response = Ok(new { Status = "Success"});

            return response;
        }
    }
}
