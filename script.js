function Validate()                                    
		{ 
			// var name = document.getElementById("fname").Value;         
			var name = document.forms["RegForm"]["firstname"];       
			var lastname = document.forms["RegForm"]["lastname"];    
			var email = document.forms["RegForm"]["email"];  
			var college =  document.forms["RegForm"]["college"];  
			var address = document.forms["RegForm"]["address"];  
			var id = document.forms["RegForm"]["id"];  
		   
			if (name.value == "")                                  
			{ 
				window.alert("Please enter your Firstname."); 
				name.focus();
				return false; 
			} 
		   
			if (lastname.value == "")                               
			{ 
				alert("Please enter your Last name."); 
				lastname.focus(); 
				return false; 
			} 
			   
			if (email.value == "")                                   
			{ 
				alert("Please enter a valid Email Address."); 
				email.focus(); 
				return false; 
			} 
		   
			if (college.value == "")                           
			{ 
				alert("Please enter your college name."); 
				college.focus(); 
				return false; 
			} 
		   
			if (address.value == "")                        
			{ 
				alert("Please enter your Address"); 
				address.focus(); 
				return false; 
			} 
		   
			if (id.selectedIndex < 1)                  
			{ 
				alert("Please enter your proper ID."); 
				id.focus(); 
				return false; 
			} 
		   
			return true; 
		}