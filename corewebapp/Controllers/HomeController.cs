using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Core.Business;
using System.Net;

namespace corewebapp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Play()
        {
            return View();
        }

        public JsonResult Reverse(string value)
        {
            var revValue = StringUtil.Reverse(value);
            var result = Json(revValue);
            
            return result;
        }


        public IActionResult Error()
        {
            return View();
        }


    }
}
