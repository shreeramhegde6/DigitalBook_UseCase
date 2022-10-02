using System;

namespace Shared.Model
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
