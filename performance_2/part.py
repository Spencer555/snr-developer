pwa - progressive webapp is close to the navtive app as possibe and can work offline

the more js u send the longer it would take to parse and compile b4 ur website becomes interactive 

js execution also occupies the main thread  to run till its done



there is a new concept in angular two called AoT (ahead of time) compilation 
and ship the code the browser can work with to the browser


but browers do JIT (just in time) compilation
       
limit animation


at the end of the day 
we want 
time to first meaningful paint 
time to interactive



code spliting or minimal bootstapping 
we send down a mimially functional page composed of html css and js  then as more features arrive the app can lazy load (lazy load means the loading after the page interactive so the user thinks its fast)


react does it by default with npm build