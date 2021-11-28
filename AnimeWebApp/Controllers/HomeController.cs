using System.Linq;
using AnimeWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace AnimeWebApp.Controllers
{
    public class HomeController : Controller
    {
        public readonly ApplicationDbContext _db;

        public HomeController(ApplicationDbContext context)
        {
            _db = context;
        }
        
        public IActionResult Index()
        {
            //var user = _db.Users.FirstOrDefault<User>();
            return View();
        }
        
        public IActionResult Privacy()
        {
            return View();
        }
        
        public IActionResult Registration()
        {
            return View();
        }
        
        public IActionResult Login()
        {
            return View();
        }
    }
}