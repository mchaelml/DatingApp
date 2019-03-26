using System;

namespace DatingApp.API.Models
{
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public byte Size { get; set; }
        public string Description { get; set; }
        public bool IsMain { get; set; }
        public DateTime Uploaded { get; set; }

        public User User { get; set; }

        public int UserId { get; set; }
    }
}