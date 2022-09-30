using DigitalBookAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace DigitalBookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        DigitalBookDBContext db = new DigitalBookDBContext();

        [HttpPost,DisableRequestSizeLimit]
        public IActionResult upload()
        {
            var file = Request.Form.Files[0];
            var foldername = "Images";
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), foldername);
            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = Path.Combine(foldername, fileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                TblImage obj = new TblImage();
                obj.ImageUrl = dbPath;
                db.TblImages.Add(obj);
                db.SaveChanges();
                return Ok(new { dbPath });
            }
            else
            {
                return BadRequest();
            }

        }

        [HttpPut]
        [Route("book-block")]
        public IActionResult BookBlock([FromBody] int id)
        {
            try
            {
                var bookblobk = db.TblCreatebooks.Where(s => s.Id == id).FirstOrDefault();
                bookblobk.ActiveFlag = false;
                db.TblCreatebooks.Update(bookblobk);
                db.SaveChanges();
                var response = new { Status = "Success" };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }


        }
        [HttpPut]
        [Route("book-unblock")]
        public IActionResult BookUnBlock([FromBody] int id)
        {
            try
            {
                var bookunblobk = db.TblCreatebooks.Where(s => s.Id == id).FirstOrDefault();
                bookunblobk.ActiveFlag = true;
                db.TblCreatebooks.Update(bookunblobk);
                db.SaveChanges();
                var response = new { Status = "Success" };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }


        }
    }
}
