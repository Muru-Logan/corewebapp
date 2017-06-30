using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Core.Business;

namespace Core.UnitTest
{
    [TestClass]
    public class BusinessUnitTest
    {
        [TestMethod]
        public void StringReverse_Success_Test()
        {
            var value = "muru";
            var eulav = StringUtil.Reverse(value);

            Assert.AreEqual("urum", eulav);
        }

        [TestMethod]
        public void StringReverse_failure_Test()
        {
            var value = "muru";
            var eulav = StringUtil.Reverse(value);

            Assert.AreNotEqual("urum", eulav);
        }
    }
}
