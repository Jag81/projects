(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "epworth-sleepiness-scale":     {url:"$H/m/epworth-sleepiness-scale.html",router:1},
        "health-news":                  {url:"$M/m/health-news.html"},
        
        "about-vmiis":  {url:"$H/m/about-vmiis.html",router:1},
        "module-editor":{url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
