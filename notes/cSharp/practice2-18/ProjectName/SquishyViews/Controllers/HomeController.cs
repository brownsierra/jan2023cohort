using Microsoft.AspNetCore.Mvc;
namespace SquishyViews.Controllers;     
    public class HomeController : Controller   
    {
        
        [HttpGet]       
        [Route("")]     
    public string Index() {
        This is my index;
    }
    }