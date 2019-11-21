using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace HW1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // GET api/values/GetNumWords
        //3
        [HttpGet("GetLengthWords")]
        public int GetLengthWords(string sentence)
        {
            var results = sentence.Split(' ');
            return results.Length;
        }

        // GET api/values/GetWords
        //4
        [HttpGet("GetOddWords")]
        public string GetOddWords(string sentence)
        {
            List<string> words = new List<string>();
            int i = 0;
            foreach(string item in sentence.Split(" "))
            {
                if (!string.IsNullOrWhiteSpace(item) && i%2==0)
                    words.Add(item);
                i++;
            }
            return string.Join(" ", words);
        }
        // GET api/values/SameWords
        //number 5
        [HttpGet("SameWords")]
        public bool SameWords(string w1, string w2)
        {
            return w1.ToLower().Equals(w2.ToLower());
        }

       
        //GET api/values/PlaceWords
        //10
        [HttpGet("PlaceWords")]
        public string PlacesWords(string w1)
        {
            string temp = "";
            for (int i = 0; i < w1.Length; i++)
                if (w1[i] > 90)
                    temp = temp + " " + (char)(w1[i] - 48);
                else
                    temp = temp + " " + (char)(w1[i] - 16);
            return temp;
        }


        //GET api/values/Calculator
        [HttpGet("Calculator")]
        public string Calculator(int num1, int num2)
        {
            int con, sub , mult, div;
            string Cal;
            con = num1 + num2;
            sub = num1 - num2;
            mult = num1 * num2;
            div = num1 / num2;
            if(num2==0)
                Cal = "num1+num2=" + con +"num1-num2=" + sub + "num1*num2=" + mult + "num1/num2=" + div;
            else
                Cal = "Error9";
            return Cal;

        }




        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
