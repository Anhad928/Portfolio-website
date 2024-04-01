using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
      
        public IActionResult Index()
        {
            return View();
        }



        
        
        public IActionResult AboutMe()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult ExpenseManager()
        {
            return View();
        }
        public IActionResult Library()
        {
            return View();
        }
        public IActionResult Robot()
        {
            return View();
        }
    }
}
