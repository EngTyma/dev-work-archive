const ageDate = document.getElementById("ageDate"), // input-ka aad dhalashada ku qoreyso
    btnAge = document.getElementById("btnAge"), // button-ka "calculate age"
    yourAge = document.querySelector(".yourAge"); // meesha natiijada lagu soo bandhigayo

btnAge.addEventListener("click", () => {
    /*  
          Marka hore: waxaan qaadanaa date-ka uu user-ku soo geliyey.
          Input-ka date-ka waa text caadi ah, sida “2005-02-10”.
          Waxaan u beddelaynaa Date Object si aan u xisaabino.
        */
    const birthDate = new Date(ageDate.value);

    /*
          Waxaan soo qaadaneynaa maanta (today).
          Today = maalinta hadda jirta ee kumbuyuutarku hayo.
        */
    const today = new Date();

    /*
          Waxaan xisaabinaynaa farqiga u dhexeeya sanadka maanta iyo sanadka dhalashada.
          Tani waa qaabka ugu fudud ee lagu helo age-ka.
        */
    const age = today.getFullYear() - birthDate.getFullYear();

    /*
          Waxaan ku soo bandhigaynaa natiijada span-ka.
        */
    yourAge.innerText = age;
});