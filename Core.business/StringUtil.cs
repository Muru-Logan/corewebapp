using System;
using System.Text;

namespace Core.Business
{
    public class StringUtil
    {

        public static string Reverse(string value)
        {
            if (string.IsNullOrEmpty(value) || string.IsNullOrWhiteSpace(value))
            {
                return string.Empty;
            }

            var arr = value.ToCharArray();
            var rev = new StringBuilder();

            for(var i=arr.Length-1; i>=0; i--)
            {
                rev.Append(arr[i]);
            }
            
            return rev.ToString();

        }



    }
}
