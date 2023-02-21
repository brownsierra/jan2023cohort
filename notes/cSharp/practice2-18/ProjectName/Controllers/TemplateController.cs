using Microsoft.AspNetCore.Mvc;
namespace ProjectName.Controllers;     
    public class TemplateController : Controller   
    {
        
        [HttpGet]       
        [Route("")]     
        public string Index()
        {
            return "Hello World from HelloController!";
        }
        [HttpGet("/hello")]
        public string Hello() {
            return "What cooking?";
        }
    }

