using Microsoft.AspNetCore.Mvc;
namespace NewBasicWeb.Controllers;     
    public class RootController : Controller   
    {
        
        [HttpGet]       
        [Route("")]     
        public ViewResult Index()
        {
            return View();
        }
            [HttpGet("/fakeRoute")]

    public RedirectToActionResult Method() {
        return RedirectToAction("RealRoute");
    }

    [HttpGet("/realRoute")]
    public ViewResult RealRoute() {
        return View("index");
    }
    }

    
