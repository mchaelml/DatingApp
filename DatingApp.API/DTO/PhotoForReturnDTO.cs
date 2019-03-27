using System;

namespace DatingApp.API.DTO
{
    public class PhotoForReturnDTO
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public byte Size { get; set; }
        public string Description { get; set; }
        public bool IsMain { get; set; }
        public DateTime Uploaded { get; set; }
        public string PublicId { get; set; }
    }
}