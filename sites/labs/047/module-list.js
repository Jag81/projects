(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":       {url:"$H/m/calendar-week.html",Table:"demo-vm-19091811","booking":"m2",lookup:"demo-vm-19091812"},
        "m6":       {url:"$H/m/calendar-month.html",Table:"demo-vm-19091811","booking":"m2",lookup:"demo-vm-19091812"},
        "m7":       {url:"$H/m/calendar-day.html",Table:"demo-vm-19091811","booking":"m2",lookup:"demo-vm-19091812"},
        "m2":       {url:"$H/m/booking-form.html",Table:"demo-vm-19091811",lookup:"demo-vm-19091812"},
        "m3":       {url:"$H/m/booking-data.html",Table:"demo-vm-19091811",form_module:"m2"},
        "m4":       {url:"$H/m/list-data.html",Table:"demo-vm-19091812",form_module:"m5"},
        "m5":       {url:"$H/m/list-form.html",Table:"demo-vm-19091812"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
