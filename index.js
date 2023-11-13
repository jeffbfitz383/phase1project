document.addEventListener('DOMContentLoaded', ()=>{

    fetchURL()
    
    })

    function fetchURL(){
        fetch('')
        .then(r => r.json())
          .then (json => {
            bookData=json;
        
            bookData.forEach(books => {
              createNav(books)
              
            })
          
            
            
        
        
        })}