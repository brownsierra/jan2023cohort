using Microsoft.AspNetCore.Mvc;
namespace GitOctoCats.Controllers;     
    public class HomeController : Controller   
    {
        
        [HttpGet]       
        [Route("")]     
        public ViewResult Index()
        {
            return View();
        }
    }
