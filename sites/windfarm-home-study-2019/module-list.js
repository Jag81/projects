(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        //-------------------------------------------------------------------------------------
        //randomisation
        "randomisation-data":		        {url:"$H/m/tasks/randomisation-data.html",Table:"91000792",form_module:"randomisation-form"},
        "randomisation-form":		        {url:"$H/m/tasks/randomisation-form.html",Table:"91000792"},
        //-------------------------------------------------------------------------------------
        //tasks
        "s-phone-screening-hearing-data":	{url:"$H/m/tasks/phone-screening-hearing-data.html",Table:"91000793",form_module:"s-phone-screening-hearing-form"},
        "s-phone-screening-hearing-form":	{url:"$H/m/tasks/phone-screening-hearing-form.html",Table:"91000793"},
        "s-consent-data":	                {url:"$H/m/tasks/consent-data.html",Table:"91000794",form_module:"s-consent-form"},
        "s-consent-form":	                {url:"$H/m/tasks/consent-form.html",Table:"91000794"},
        "s-general-information-data":	    {url:"$H/m/tasks/general-information-data.html",Table:"91000795",form_module:"s-general-information-form"},
        "s-general-information-form":	    {url:"$H/m/tasks/general-information-form.html",Table:"91000795"},
        "s-shiftwork-data":	                {url:"$H/m/tasks/shiftwork-data.html",Table:"91000796",form_module:"s-shiftwork-form"},
        "s-shiftwork-form":	                {url:"$H/m/tasks/shiftwork-form.html",Table:"91000796"},

        "s-weinstein-noise-sensitivity-score-data":	{url:"$H/m/tasks/weinstein-noise-sensitivity-score-data.html",Table:"91000797",form_module:"s-weinstein-noise-sensitivity-score-form"},
        "s-weinstein-noise-sensitivity-score-form":	{url:"$H/m/tasks/weinstein-noise-sensitivity-score-form.html",Table:"91000797"},
        
        //-------------------------------------------------------------------------------------
        //app
        "panel-main":                       {url:"$H/m/panel-main.html",router:1},
        "panel-child": 		                {url:"$H/m/panel-child.html"},
        "participant-data":     	        {url:"$H/m/participant-data.html", Table:"91000790",
                                                form_module:"participant-form",
                                                panel_child:"panel-child",
                                                online_questionnaire_setup:"online-questionnaire-setup"
                                            },
        "participant-form":     	        {url:"$H/m/participant-form.html", Table:"91000790"},
        "edc-notes-data":	  		        {url:"$H/m/edc-notes-data.html",Table:"91000791",form_module:"edc-notes-form"},
        "edc-notes-form":	  		        {url:"$H/m/edc-notes-form.html",Table:"91000791"},
        "online-questionnaire-setup": 	    {url:"$H/m/online-questionnaire-setup.html",Table:"91000790"},
        "online-questionnaire-panel":       {url:"$H/m/online-questionnaire-panel.html"},
        "online-questionnaire-login":       {url:"$H/m/online-questionnaire-login.html"},
        //-------------------------------------------------------------------------------------
        //permission
        "panel-permission":   			    {url:"$H/p/panel-permission.html",router:1},
        "permission-check":                 {url:"$H/p/permission-check.html"},
        "permission-role-login-data":       {url:"$H/p/permission-role-login-data.html",Table:"91000789",form_module:"permission-role-login-form"},
        "permission-role-login-form":       {url:"$H/p/permission-role-login-form.html",Table:"91000789"},
        "permission-role-table-group-data": {url:"$H/p/permission-role-table-group-data.html",Table:"91000788",form_module:"permission-role-table-group-form"},
        "permission-role-table-group-form": {url:"$H/p/permission-role-table-group-form.html",Table:"91000788"},
        "permission-query-data":            {url:"$H/p/permission-query-data.html",Table:"91000787",form_module:"permission-query-form"},
        "permission-query-form":            {url:"$H/p/permission-query-form.html",Table:"91000787"},
        //-------------------------------------------------------------------------------------
        "module-editor":                    {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1,sys:1},
        //-------------------------------------------------------------------------------------
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
