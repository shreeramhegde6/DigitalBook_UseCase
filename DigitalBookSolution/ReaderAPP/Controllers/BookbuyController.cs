using MassTransit;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReaderAPP.Models;
using Shared.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReaderAPP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookbuyController : ControllerBase
    {
        DigitalBookDBContext db = new DigitalBookDBContext();

        private readonly IBus bus;
        
        public BookbuyController(IBus _bus)
        {
            bus = _bus;
        }

        [HttpPost]
        [Route("buybook")]
        public async Task<IActionResult> Buybook([FromBody] TblBuybook order)
        {
            //IActionResult responce = Unauthorized();
            try
            {
                order.Buydate = DateTime.Now;
                //var bookAdd = db.TblCreatebooks.Where(x => x.Id == bookadding.I).FirstOrDefault();
                //string[] img= bookadding.Image.Replace('\','/');
                //bookadding.Image = "";
                db.TblBuybooks.Add(order);
                db.SaveChanges();

                Uri uri = new Uri("rabbitmq:localhost/orderQueue");
                var endpoint = await bus.GetSendEndpoint(uri);
                Order orderMessage = new Order();
                orderMessage.BookId = order.BookId;
                orderMessage.Id = order.Id;
                orderMessage.Price = order.Price;
                orderMessage.Contents = order.Contents;
                
                await endpoint.Send(orderMessage);
                return Ok(new { status = "Your order is placed" });
                //responce = Ok(new { Status = "Success" });


            }
            catch
            {
                return BadRequest();
            }
           

        }
    }
}
