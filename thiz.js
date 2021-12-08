const a = {
    pf_month: 36000,
    no_of_months: 84,
    id       : "157R1A0168",
    Total_pf : function() {
      return (this.pf_month*this.no_of_months);
    }
  }
  console.log(a.Total_pf());