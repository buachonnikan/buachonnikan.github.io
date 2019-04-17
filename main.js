var m=0;
        function check(){
            if(m==0){
                document.getElementById("menu").style.display = "none";
                document.getElementById("brazil").style.display = "none";
                document.getElementById("canada").style.display = "none";
                document.getElementById("US").style.display = "none";
                document.getElementById("JM").style.display = "none";
                document.getElementById("AG").style.display = "none";
                document.getElementById("gdp").style.display = "initial";
                
                document.getElementById("BRA_rev").style.display = "none";
                document.getElementById("CAN_rev").style.display = "none";
                document.getElementById("USA_rev").style.display = "none";
                document.getElementById("JAM_rev").style.display = "none";
                document.getElementById("ARG_rev").style.display = "none";
                document.getElementById("all_rev").style.display = "initial";
                
                document.getElementById("ec").style.display = "none";
                document.getElementById("er").style.display = "initial";
                document.getElementById("eu").style.display = "none";
                document.getElementById("ea").style.display = "none";
                document.getElementById("ej").style.display = "none";
                document.getElementById("eb").style.display = "none";

                document.getElementById("ecg").style.display = "none";
                document.getElementById("eg").style.display = "initial";
                document.getElementById("eug").style.display = "none";
                document.getElementById("eag").style.display = "none";
                document.getElementById("ejg").style.display = "none";
                document.getElementById("ebg").style.display = "none";
                m=1;
            }
        }
        function Omenu(){
            document.getElementById("b1").style.left = "0";
            document.getElementById("b2").style.right = "0";
            document.getElementById("b3").style.left = "0";
            document.getElementById("b4").style.right = "0";
            document.getElementById("menu").style.display = "none";
        }
        function menu() {
            document.getElementById("b1").style.left = "-51%";
            document.getElementById("b2").style.right = "-49%";
            document.getElementById("b3").style.left = "-51%";
            document.getElementById("b4").style.right = "-49%";
            document.getElementById("menu").style.display = "initial";
        }

        function gt(){
            document.getElementById("brazil").style.display = "none";
            document.getElementById("canada").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";
            document.getElementById("gdp").style.display = "initial";

            document.getElementById("ecg").style.display = "none";
            document.getElementById("eg").style.display = "initial";
            document.getElementById("eug").style.display = "none";
            document.getElementById("eag").style.display = "none";
            document.getElementById("ejg").style.display = "none";
            document.getElementById("ebg").style.display = "none";
        }
        function br() {
            document.getElementById("brazil").style.display = "initial";
            document.getElementById("canada").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";
            document.getElementById("gdp").style.display = "none";
            
            document.getElementById("ecg").style.display = "none";
            document.getElementById("eg").style.display = "none";
            document.getElementById("eug").style.display = "none";
            document.getElementById("eag").style.display = "none";
            document.getElementById("ejg").style.display = "none";
            document.getElementById("ebg").style.display = "initial";
        }
        function can() {
            document.getElementById("gdp").style.display = "none";
            document.getElementById("canada").style.display = "initial";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";

            document.getElementById("ecg").style.display = "initial";
            document.getElementById("eg").style.display = "none";
            document.getElementById("eug").style.display = "none";
            document.getElementById("eag").style.display = "none";
            document.getElementById("ejg").style.display = "none";
            document.getElementById("ebg").style.display = "none";
        }
        function us() {
            document.getElementById("gdp").style.display = "none";
            document.getElementById("canada").style.display = "none";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "initial";
            document.getElementById("AG").style.display = "none";
            document.getElementById("JM").style.display = "none";

            document.getElementById("ecg").style.display = "none";
            document.getElementById("eg").style.display = "none";
            document.getElementById("eug").style.display = "initial";
            document.getElementById("eag").style.display = "none";
            document.getElementById("ejg").style.display = "none";
            document.getElementById("ebg").style.display = "none";
        }
        function ar() {
            document.getElementById("gdp").style.display = "none";
            document.getElementById("AG").style.display = "initial";
            document.getElementById("canada").style.display = "none";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "none";
            document.getElementById("JM").style.display = "none";

            document.getElementById("ecg").style.display = "none";
            document.getElementById("eg").style.display = "none";
            document.getElementById("eug").style.display = "none";
            document.getElementById("eag").style.display = "initial";
            document.getElementById("ejg").style.display = "none";
            document.getElementById("ebg").style.display = "none";
        }
        function jm() {
            document.getElementById("gdp").style.display = "none";
            document.getElementById("JM").style.display = "initial";
            document.getElementById("AG").style.display = "none";
            document.getElementById("canada").style.display = "none";
            document.getElementById("brazil").style.display = "none";
            document.getElementById("US").style.display = "none";

            document.getElementById("ecg").style.display = "none";
            document.getElementById("eg").style.display = "none";
            document.getElementById("eug").style.display = "none";
            document.getElementById("eag").style.display = "none";
            document.getElementById("ejg").style.display = "initial";
            document.getElementById("ebg").style.display = "none";
        }

        // revenue
        function rt(){
            document.getElementById("all_rev").style.display = "initial";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";

            document.getElementById("ec").style.display = "none";
            document.getElementById("er").style.display = "initial";
            document.getElementById("eu").style.display = "none";
            document.getElementById("ea").style.display = "none";
            document.getElementById("ej").style.display = "none";
            document.getElementById("eb").style.display = "none";

            //brazil
            document.getElementById("drop_b").style.display = "none";
            document.getElementById("BRA_bar").style.display = "none";//bar        
            document.getElementById("BRA_tax_rev").style.display = "none";//donut
            document.getElementById("etax_b").style.display = "none";//explain tax rev
            document.getElementById("rb_but").style.display = "none";
            document.getElementById("tb_but").style.display = "none";

            //canada
            document.getElementById("drop_c").style.display = "none";
            document.getElementById("CAN_bar").style.display = "none";//bar        
            document.getElementById("CAN_tax_rev").style.display = "none";//donut
            document.getElementById("etax_c").style.display = "none";//explain tax rev
            document.getElementById("rc_but").style.display = "none";
            document.getElementById("tc_but").style.display = "none";

            //usa
            document.getElementById("drop_u").style.display = "none";
            document.getElementById("USA_bar").style.display = "none";//bar        
            document.getElementById("USA_tax_rev").style.display = "none";//donut
            document.getElementById("etax_u").style.display = "none";//explain tax rev
            document.getElementById("ru_but").style.display = "none";
            document.getElementById("tu_but").style.display = "none";
        }
        function brr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "initial";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";

            document.getElementById("ec").style.display = "none";
            document.getElementById("er").style.display = "none";
            document.getElementById("eu").style.display = "none";
            document.getElementById("ea").style.display = "none";
            document.getElementById("ej").style.display = "none";
            document.getElementById("eb").style.display = "initial";

            document.getElementById("drop_b").style.display = "none";
            document.getElementById("BRA_bar").style.display = "none";//bar        
            document.getElementById("BRA_tax_rev").style.display = "none";//donut
            document.getElementById("etax_b").style.display = "none";//explain tax rev
            document.getElementById("rb_but").style.display = "none";
            document.getElementById("tb_but").style.display = "initial";

            document.getElementById("rc_but").style.display = "none";
            document.getElementById("tc_but").style.display = "none";
            document.getElementById("ru_but").style.display = "none";
            document.getElementById("tu_but").style.display = "none";

            document.getElementById("USA_bar").style.display = "none";//bar        
            document.getElementById("USA_tax_rev").style.display = "none";//donut
            document.getElementById("drop_u").style.display = "none";//drop
            document.getElementById("CAN_bar").style.display = "none";//bar        
            document.getElementById("CAN_tax_rev").style.display = "none";//donut
            document.getElementById("drop_c").style.display = "none";//drop
            
        }
        function canr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "initial";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";

            document.getElementById("ec").style.display = "initial";
            document.getElementById("er").style.display = "none";
            document.getElementById("eu").style.display = "none";
            document.getElementById("ea").style.display = "none";
            document.getElementById("ej").style.display = "none";
            document.getElementById("eb").style.display = "none";

            document.getElementById("drop_c").style.display = "none";
            document.getElementById("CAN_bar").style.display = "none";//bar        
            document.getElementById("CAN_tax_rev").style.display = "none";//donut
            document.getElementById("etax_c").style.display = "none";//explain tax rev
            document.getElementById("rc_but").style.display = "none";
            document.getElementById("tc_but").style.display = "initial";

            document.getElementById("rb_but").style.display = "none";
            document.getElementById("tb_but").style.display = "none";
            document.getElementById("ru_but").style.display = "none";
            document.getElementById("tu_but").style.display = "none";

            document.getElementById("USA_bar").style.display = "none";//bar        
            document.getElementById("USA_tax_rev").style.display = "none";//donut
            document.getElementById("drop_u").style.display = "none";//drop
            document.getElementById("BRA_bar").style.display = "none";//bar        
            document.getElementById("BRA_tax_rev").style.display = "none";//donut
            document.getElementById("drop_b").style.display = "none";//drop
        }
        function usr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "initial";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "none";

            document.getElementById("ec").style.display = "none";
            document.getElementById("er").style.display = "none";
            document.getElementById("eu").style.display = "initial";
            document.getElementById("ea").style.display = "none";
            document.getElementById("ej").style.display = "none";
            document.getElementById("eb").style.display = "none";

            document.getElementById("drop_u").style.display = "none";
            document.getElementById("USA_bar").style.display = "none";//bar        
            document.getElementById("USA_tax_rev").style.display = "none";//donut
            document.getElementById("etax_u").style.display = "none";//explain tax rev
            document.getElementById("ru_but").style.display = "none";
            document.getElementById("tu_but").style.display = "initial";

            document.getElementById("rb_but").style.display = "none";
            document.getElementById("tb_but").style.display = "none";
            document.getElementById("rc_but").style.display = "none";
            document.getElementById("tc_but").style.display = "none";

            document.getElementById("CAN_bar").style.display = "none";//bar        
            document.getElementById("CAN_tax_rev").style.display = "none";//donut
            document.getElementById("drop_c").style.display = "none";//drop
            document.getElementById("BRA_bar").style.display = "none";//bar        
            document.getElementById("BRA_tax_rev").style.display = "none";//donut
            document.getElementById("drop_b").style.display = "none";//drop
        }
        function arr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "none";
            document.getElementById("ARG_rev").style.display = "initial";

            document.getElementById("ec").style.display = "none";
            document.getElementById("er").style.display = "none";
            document.getElementById("eu").style.display = "none";
            document.getElementById("ea").style.display = "initial";
            document.getElementById("ej").style.display = "none";
            document.getElementById("eb").style.display = "none";
        }
        function jmr() {
            document.getElementById("all_rev").style.display = "none";
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("JAM_rev").style.display = "initial";
            document.getElementById("ARG_rev").style.display = "none";

            document.getElementById("ec").style.display = "none";
            document.getElementById("er").style.display = "none";
            document.getElementById("eu").style.display = "none";
            document.getElementById("ea").style.display = "none";
            document.getElementById("ej").style.display = "initial";
            document.getElementById("eb").style.display = "none";
        }

        function rb_but(){
            document.getElementById("BRA_rev").style.display = "initial";
            document.getElementById("eb").style.display = "initial"; //explain

            //button
            document.getElementById("rb_but").style.display = "none";
            document.getElementById("tb_but").style.display = "initial";

            //tax rev
            document.getElementById("drop_b").style.display = "none";
            document.getElementById("BRA_bar").style.display = "none";//bar        
            document.getElementById("BRA_tax_rev").style.display = "none";//donut
            document.getElementById("etax_b").style.display = "none";//explain tax rev
            
        }
        function tb_but(){
            document.getElementById("BRA_rev").style.display = "none";
            document.getElementById("eb").style.display = "none"; //explain

            //button
            document.getElementById("rb_but").style.display = "initial";
            document.getElementById("tb_but").style.display = "none";

            //tax rev
            document.getElementById("drop_b").style.display = "initial";
            document.getElementById("BRA_bar").style.display = "none";//bar        
            document.getElementById("BRA_tax_rev").style.display = "initial";//donut
            document.getElementById("etax_b").style.display = "initial";//explain tax rev
            
        }
        function b_bar(){ //click donut to bar brazil
            document.getElementById("BRA_bar").style.display = "initial";//bar        
            document.getElementById("BRA_tax_rev").style.display = "none";//donut
        }
        function b_don(){//click bar to donut brazil
            document.getElementById("BRA_bar").style.display = "none";//bar        
            document.getElementById("BRA_tax_rev").style.display = "initial";//donut
        }

        function rc_but(){
            document.getElementById("CAN_rev").style.display = "initial";
            document.getElementById("ec").style.display = "initial"; //explain

            //button
            document.getElementById("rc_but").style.display = "none";
            document.getElementById("tc_but").style.display = "initial";

            //tax rev
            document.getElementById("drop_c").style.display = "none";
            document.getElementById("CAN_bar").style.display = "none";//bar        
            document.getElementById("CAN_tax_rev").style.display = "none";//donut
            document.getElementById("etax_c").style.display = "none";//explain tax rev
            
        }
        function tc_but(){
            document.getElementById("CAN_rev").style.display = "none";
            document.getElementById("ec").style.display = "none"; //explain

            //button
            document.getElementById("rc_but").style.display = "initial";
            document.getElementById("tc_but").style.display = "none";

            //tax rev
            document.getElementById("drop_c").style.display = "initial";
            document.getElementById("CAN_bar").style.display = "none";//bar        
            document.getElementById("CAN_tax_rev").style.display = "initial";//donut
            document.getElementById("etax_c").style.display = "initial";//explain tax rev
            
        }
        function c_bar(){ //click donut to bar canada
            document.getElementById("CAN_bar").style.display = "initial";//bar        
            document.getElementById("CAN_tax_rev").style.display = "none";//donut
        }
        function c_don(){//click bar to donut canada
            document.getElementById("CAN_bar").style.display = "none";//bar        
            document.getElementById("CAN_tax_rev").style.display = "initial";//donut
        }

        function ru_but(){
            document.getElementById("USA_rev").style.display = "initial";
            document.getElementById("eu").style.display = "initial"; //explain

            //button
            document.getElementById("ru_but").style.display = "none";
            document.getElementById("tu_but").style.display = "initial";

            //tax rev
            document.getElementById("drop_u").style.display = "none";
            document.getElementById("USA_bar").style.display = "none";//bar        
            document.getElementById("USA_tax_rev").style.display = "none";//donut
            document.getElementById("etax_u").style.display = "none";//explain tax rev
            
        }
        function tu_but(){
            document.getElementById("USA_rev").style.display = "none";
            document.getElementById("eu").style.display = "none"; //explain

            //button
            document.getElementById("ru_but").style.display = "initial";
            document.getElementById("tu_but").style.display = "none";

            //tax rev
            document.getElementById("drop_u").style.display = "initial";
            document.getElementById("USA_bar").style.display = "none";//bar        
            document.getElementById("USA_tax_rev").style.display = "initial";//donut
            document.getElementById("etax_u").style.display = "initial";//explain tax rev
            
        }
        function u_bar(){ //click donut to bar canada
            document.getElementById("USA_bar").style.display = "initial";//bar        
            document.getElementById("USA_tax_rev").style.display = "none";//donut
        }
        function u_don(){//click bar to donut canada
            document.getElementById("USA_bar").style.display = "none";//bar        
            document.getElementById("USA_tax_rev").style.display = "initial";//donut
        }
