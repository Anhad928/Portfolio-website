using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;

namespace Portfolio.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
    [HttpPost]
    public IActionResult Contact(string email, string name, string message)
    {
        // Handle the form submission here. You might save the message to a database or send an email.

        return RedirectToAction("Index");
    }

}


