using intprog2.Models;
using intprog2.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace intprog2.Auth
{
    public class ogrservis
    {
        
        DB01Entities db = new DB01Entities();   
        public ogrModel ÖğrenciOturumAc(string kadi, string parola)
        {
            ogrModel ogr = db.ogr.Where(s => s.ogrAdsoyad == kadi && s.ogrSıfre == parola).Select(x => new ogrModel ()
            {
                ogrId = x.ogrId,
                ogrAdsoyad = x.ogrAdsoyad,
                ogrMail=x.ogrMail,
                ogrAdmin = x.ogrAdmin,
                ogrSıfre = x.ogrSıfre






            }).SingleOrDefault();
            return ogr;
        }
    }
}