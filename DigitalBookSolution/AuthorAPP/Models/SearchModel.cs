using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthorAPP.Models
{
    public class SearchModel
    {

        public string Title { get; set; }

        public string Publisher { get; set; }
        public string Category { get; set; }

        //public string AuthorEmail { get; set; }
        public string Creationdate { get; set; }
    }
}
