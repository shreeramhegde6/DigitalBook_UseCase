using System;
using System.Collections.Generic;

#nullable disable

namespace ReaderAPP.Models
{
    public partial class TblCreatebook
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string Image { get; set; }
        public string Price { get; set; }
        public string Publisher { get; set; }
        public string Active { get; set; }
        public string Contents { get; set; }
        public string AuthorEmail { get; set; }
        public DateTime? Creationdate { get; set; }
        public bool? ActiveFlag { get; set; }
    }
}
