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
    }
}
