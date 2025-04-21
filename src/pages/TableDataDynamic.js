const data = [
{nos:"1",first:"Sankar",second:"Sen",third:"sankar@gmail.com",fourth:"delhi",fifth:"palam",sixth:"Salesperson",handle:"marketing"},
{nos:"2",first:"kishore",second:"das",third:"kishore12@gmail.com",fourth:"kolkata",fifth:"kestopur",sixth:"supervisor",handle:"marketing"},
{nos:"3",first:"Latai",second:"Dongra",third:"dongra@gmail.com",fourth:"guahati",fifth:"dispur",sixth:"Manager in charge",handle:"marketing"}

]






const TableDataDynamic = () => {
    return (
      <table class="table table-striped table table-hover border border-danger ">
        <thead>
          <tr class="table-danger">
            <th scope="col">Nos.</th>
            <th scope="col">First</th>
            <th scope="col">Second</th>
            <th scope="col">Third</th>
            <th scope="col">Fourth</th>
            <th scope="col">Fifth</th>
            <th scope="col">Sixth</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {
              data.map((value,key)=>{
                  return(
                    <tr key={key}>
                        <td>{value.nos}</td>
                        <td>{value.first}</td>
                        <td>{value.second}</td>
                        <td>{value.third}</td>
                        <td>{value.fourth}</td>
                        <td>{value.fifth}</td>
                        <td>{value.sixth}</td>
                        <td>{value.handle}</td>

                    </tr>

                  )
              })

          }
          
        </tbody>
      </table>
    );
  };
  export default TableDataDynamic;
  