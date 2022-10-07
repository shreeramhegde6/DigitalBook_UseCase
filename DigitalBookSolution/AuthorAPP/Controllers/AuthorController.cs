using AuthorAPP.Models;
using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace AuthorAPP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        DigitalBookDBContext db = new DigitalBookDBContext();

        //[Route("createbook")]
        //[HttpPost]
        //public IActionResult Post([FromBody] TblCreatebook book)
        //{
        //    book.Creationdate = DateTime.Today;
        //    db.TblCreatebooks.Add(book);

        //    db.SaveChanges();
        //    var response = new { Status = "Success" };
        //    return Ok(response);
        //}

        [Route("getbook")]
        [HttpGet]
        public IEnumerable<TblCreatebook> Get(string cname)
        {
            //return db.TblCreatebooks;
            return db.TblCreatebooks.Where(x => x.AuthorEmail == cname).Select(x => x).OrderByDescending(x => x.Id).ToList();
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


        [HttpPut]
        [Route("bookupdate")]
        public IActionResult put([FromBody] TblCreatebook createbook)
        {
            var authorUpdate = db.TblCreatebooks.Where(s => s.Id == createbook.Id).FirstOrDefault();
            authorUpdate.Title = createbook.Title;
            authorUpdate.Publisher = createbook.Publisher;
            authorUpdate.Price = createbook.Price;
            authorUpdate.Image = createbook.Image;
            authorUpdate.Category = createbook.Category;
            authorUpdate.Contents = createbook.Contents;
            authorUpdate.Active = createbook.Active;
            authorUpdate.AuthorEmail = createbook.AuthorEmail;
            db.TblCreatebooks.Update(authorUpdate);


            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }

        //blob storage

        [Route("createbook-blobimage")]
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromForm] BookDataModel book)
        {

            book.Creationdate = DateTime.Today;

            var file = Request.Form.Files[0];
            var pathToSave = Directory.GetCurrentDirectory();
            if (file.Length > 0)
            {
                try
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var _filename = Path.GetFileNameWithoutExtension(fileName);
                    fileName = _filename + DateTime.Now.ToString("yyyyMMddHHmmss") + ".jpg";
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = fileName;
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    string connectionstring = "DefaultEndpointsProtocol=https;AccountName=digibookblob;AccountKey=JsuGh6bpRBA6u7DiD+38ia2isr1m7VQBX7YcrlKCtmTfSbtbUqubTWj6puNE/M1koiSH1d1SjWu6+ASt1mZmhA==;EndpointSuffix=core.windows.net";
                    string containerName = "images";
                    BlobContainerClient container = new BlobContainerClient(connectionstring, containerName);
                    var blob = container.GetBlobClient(fileName);
                    var blobstream = System.IO.File.OpenRead(fileName);
                    await blob.UploadAsync(blobstream);
                    var URI = blob.Uri.AbsoluteUri;

                    //mypart
                    TblCreatebook obj = new TblCreatebook();
                    obj.Image = dbPath;
                    obj.Price = book.Price;
                    obj.Publisher = book.Publisher;
                    obj.Title = book.Title;
                    obj.Active = book.Active;
                    obj.AuthorEmail = book.AuthorEmail;
                    obj.Category = book.Category;
                    obj.Contents = book.Contents;
                    obj.Creationdate = book.Creationdate;

                    if (book.Active == "true") { obj.ActiveFlag = true; } else obj.ActiveFlag = false;
                    db.TblCreatebooks.Add(obj);
                    db.SaveChanges();
                    return Ok(new { dbPath });
                }
                catch (Exception ex)
                {
                    return BadRequest();
                }

            }
            else
            {
                return BadRequest();
            }


            //    book.Creationdate = DateTime.Today;
            //    //db.TblCreatebooks.Add(book);

            //    //db.SaveChanges();
            //    //var response = new { Status = "Success" };
            //    //return Ok(response);


            //    var file = Request.Form.Files[0];
            //    var foldername = "Images";
            //    var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), foldername);
            //    if (file.Length > 0)
            //    {
            //        var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
            //        var fullPath = Path.Combine(pathToSave, fileName);
            //        var dbPath = Path.Combine(foldername, fileName);
            //        using (var stream = new FileStream(fullPath, FileMode.Create))
            //        {
            //            file.CopyTo(stream);
            //        }
            //        TblCreatebook obj = new TblCreatebook();
            //        obj.Image = dbPath;
            //        obj.Price = book.Price;
            //        obj.Publisher = book.Publisher;
            //        obj.Title = book.Title;
            //        obj.Active = book.Active;
            //        obj.AuthorEmail = book.AuthorEmail;
            //        obj.Category = book.Category;
            //        obj.Contents = book.Contents;
            //        obj.Creationdate = book.Creationdate;

            //        if (book.Active == "true") { obj.ActiveFlag = true; } else obj.ActiveFlag = false;
            //        db.TblCreatebooks.Add(obj);
            //        db.SaveChanges();
            //        return Ok(new { dbPath });
            //    }
            //    else
            //    {
            //        return BadRequest();
            //    }



        }

        //blob end


        //TEST Image
        [Route("createbook-image")]
        [HttpPost]
        public IActionResult Post([FromForm] BookDataModel book)
        {
            book.Creationdate = DateTime.Today;
            //db.TblCreatebooks.Add(book);

            //db.SaveChanges();
            //var response = new { Status = "Success" };
            //return Ok(response);


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
                TblCreatebook obj = new TblCreatebook();
                obj.Image = dbPath;
                obj.Price = book.Price;
                obj.Publisher = book.Publisher;
                obj.Title = book.Title;
                obj.Active = book.Active;
                obj.AuthorEmail = book.AuthorEmail;
                obj.Category = book.Category;
                obj.Contents = book.Contents;
                obj.Creationdate = book.Creationdate;

                if (book.Active == "true") { obj.ActiveFlag = true; } else obj.ActiveFlag = false;
                db.TblCreatebooks.Add(obj);
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
