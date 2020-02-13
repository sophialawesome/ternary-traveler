const makeDataEntryComponent = (submission) => {
    console.log(submission);
       return `
             <div class="entryLog">
                 <h1> ${submission.pointOfInterest} </h1>
                 <section> ${submission.description} </section>
                 <aside><b> ${submission.cost} </b></aside>
               <aside> ${submission.location} </aside>
             </div>
         `
   }
   
   export default makeDataEntryComponent