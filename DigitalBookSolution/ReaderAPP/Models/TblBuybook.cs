using System;
using System.Collections.Generic;

#nullable disable

namespace ReaderAPP.Models
{
    public partial class TblBuybook
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public string Price { get; set; }
        public string Contents { get; set; }
        public string Image { get; set; }
        public string User { get; set; }
        public DateTime? Buydate { get; set; }
    }
}
