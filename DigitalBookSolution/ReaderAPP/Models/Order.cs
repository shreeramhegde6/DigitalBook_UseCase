using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReaderAPP.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public string Price { get; set; }
        public string Contents { get; set; }
        public string Image { get; set; }
        public string User { get; set; }

    }
}
