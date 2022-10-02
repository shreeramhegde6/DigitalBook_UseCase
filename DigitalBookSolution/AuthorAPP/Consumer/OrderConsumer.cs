using AuthorAPP.Models;
using MassTransit;
using Shared.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthorAPP.Consumer
{
    public class OrderConsumer :IConsumer<Order>
    {
        DigitalBookDBContext db = new DigitalBookDBContext();
        public Task Consume(ConsumeContext<Order> context)
        {
            var data = context.Message;
            var bookdata = db.TblCreatebooks.Where(x => x.Id == data.BookId).FirstOrDefault();
            var reducebookprice = Int32.Parse(bookdata.Price);
            reducebookprice -= 5;
            var newBookPrice=reducebookprice.ToString();
            bookdata.Price = newBookPrice;
            db.TblCreatebooks.Update(bookdata);
            //productdata.Inventory = productdata.Inventory - data.Inventory;
            //db.TblProducts.Update(productdata);
            db.SaveChanges();
            return Task.CompletedTask;
        }

   

    }
}
