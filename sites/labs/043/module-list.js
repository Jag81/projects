(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "m1":       {url:"$H/m/calendar-week.html",Table:"demo-vm-19091801","booking":"m2"},
        "m6":       {url:"$H/m/calendar-month.html",Table:"demo-vm-19091801","booking":"m2"},
        "m7":       {url:"$H/m/calendar-day.html",Table:"demo-vm-19091801","booking":"m2"},
        "m2":       {url:"$H/m/booking-form.html",Table:"demo-vm-19091801"},
        "m3":       {url:"$H/m/booking-data.html",Table:"demo-vm-19091801",form_module:"m2"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
