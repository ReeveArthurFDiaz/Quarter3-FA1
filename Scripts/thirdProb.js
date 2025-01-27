function confirmSharing(){
    var outCome;
    if(confirm("Would you like to share your personal information with this site? ")){
        outCome = console.log("Name: " + nickname + "\nHeight: " + heightft + "\'" + heightrem + "\"" + "\nWeight: " + weightpounds + " lbs");
    }
    else {
        outCome = console.log("User does not wish to share his/her information. ");
    }
}