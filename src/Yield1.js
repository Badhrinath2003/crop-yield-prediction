import { useState } from 'react';
import Navbar from './Navbar';


const Yield = () => {
  const [district, setDistrict] = useState('');
  const [season, setSeason] = useState('');
  const [crop, setCrop] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [minTemp, setMinTemp] = useState('');
  const [maxTemp, setMaxTemp] = useState('');
  const [irrigation, setIrrigation] = useState('');
  const [ph, setPh] = useState('');
  const [result, setResult] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const csvData = [rainfall,minTemp,maxTemp,ph,irrigation];

    const dists = ['District_Adilabad', 'District_Bhadradri',
    'District_Jagitial', 'District_Jangoan', 'District_Jayashankar',
    'District_Jogulamba', 'District_Kamareddy', 'District_Karimnagar',
    'District_Khammam', 'District_Komaram bheem asifabad',
    'District_Mahabubabad', 'District_Mahbubnagar', 'District_Mancherial',
    'District_Medak', 'District_Medchal', 'District_Mulugu',
    'District_Nagarkurnool', 'District_Nalgonda', 'District_Narayanapet',
    'District_Nirmal', 'District_Nizamabad', 'District_Peddapalli',
    'District_Rajanna', 'District_Rangareddy', 'District_Sangareddy',
    'District_Siddipet', 'District_Suryapet', 'District_Vikarabad',
    'District_Wanaparthy', 'District_Warangal', 'District_Warangal urban',
    'District_Yadadri']
    
    for(let i=0;i<dists.length;i++){
      if(dists[i]===district){
        csvData.push(1);
      }
      else{
        csvData.push(0);
      }
    }
    if(season==="Season_Kharif"){
        csvData.push(1);
        csvData.push(0);
    }
    else{
      csvData.push(0);
      csvData.push(1);
    }
    const crops = ['Crop_Groundnut', 'Crop_Maize', 'Crop_Moong(Green Gram)', 'Crop_Rice', 'Crop_cotton(lint)'];

    for(let i=0;i<crops.length;i++){
      if(crops[i]===crop){
        csvData.push(1);
      }
      else{
        csvData.push(0);
      }
    }

    const csvData1 = csvData.join(',');

    const response = await fetch('/acp-resource', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/csv',
      },
      body: csvData1,
    });

    // Parse the response and set the result state with the fetched data
    const data = await response.text();
    const parsedData = JSON.parse(data);
    const prediction = parsedData.Prediction[0];
    let formattedResult;
    if(crop==crops[crops.length-1]){
      formattedResult = prediction.toFixed(4) + " Bales/hectare";
    }
    else{
      formattedResult = prediction.toFixed(4) + " Tonnes/hectare";
    }
    
    setResult(formattedResult);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const handleSeasonChange = (e) => {
    setSeason(e.target.value);
  };

  const handleCropChange = (e) => {
    setCrop(e.target.value);
  };

  const handleRainfallChange = (e) => {
    setRainfall(e.target.value);
  };

  const handleMinTempChange = (e) => {
    setMinTemp(e.target.value);
  };

  const handleMaxTempChange = (e) => {
    setMaxTemp(e.target.value);
  };

  const handleIrrigationChange = (e) => {
    setIrrigation(e.target.value);
  };

  const handlePhChange = (e) => {
    setPh(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 id="head">Crop Yield Prediction</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-8">
              <table>
                <tbody>
                  <tr>
                    <td><label htmlFor="district">Select District: </label></td>
                    <td className="col2">
                      <select
                        name="district"
                        id="district"
                        className="input1"
                        value={district}
                        onChange={handleDistrictChange}
                      >
                        <option value="District_Adilabad">Adilabad</option>
                        <option value="District_Bhadradri">Bhadradri</option>
                        <option value="District_Jagitial">Jagitial</option>
                        <option value="District_Jangoan">Jangoan</option>
                        <option value="District_Jayashankar">Jayashankar</option>
                        <option value="District_Jogulamba">Jogulamba</option>
                        <option value="District_Kamareddy">Kamareddy</option>
                        <option value="District_Karimnagar">Karimnagar</option>
                        <option value="District_Khammam">Khammam</option>
                        <option value="District_Komaram bheem asifabad">Komaram bheem asifabad</option>
                        <option value="District_Mahabubabad">Mahabubabad</option>
                        <option value="District_Mahbubnagar">Mahbubnagar</option>
                        <option value="District_Mancherial">Mancherial</option>
                        <option value="District_Medak">Medak</option>
                        <option value="District_Medchal">Medchal</option>
                        <option value="District_Mulugu">Mulugu</option>
                        <option value="District_Nagarkurnool">Nagarkurnool</option>
                        <option value="District_Nalgonda">Nalgonda</option>
                        <option value="District_Narayanapet">Narayanapet</option>
                        <option value="District_Nirmal">Nirmal</option>
                        <option value="District_Nizamabad">Nizamabad</option>
                        <option value="District_Peddapalli">Peddapalli</option>
                        <option value="District_Rajanna">Rajanna</option>
                        <option value="District_Rangareddy">Rangareddy</option>
                        <option value="District_Sangareddy">Sangareddy</option>
                        <option value="District_Siddipet">Siddipet</option>
                        <option value="District_Suryapet">Suryapet</option>
                        <option value="District_Vikarabad">Vikarabad</option>
                        <option value="District_Wanaparthy">Wanaparthy</option>
                        <option value="District_Warangal">Warangal</option>
                        <option value="District_Warangal urban">Warangal urban</option>
                        <option value="District_Yadadri">Yadadri</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="season">Select Season: </label></td>
                    <td className="col2">
                      <select
                        name="season"
                        id="season"
                        className="input1"
                        value={season}
                        onChange={handleSeasonChange}
                      >
                        <option value="Season_rabi">Rabi</option>
                        <option value="Season_Kharif">Kharif</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="crop">Select Crop : </label></td>
                    <td className="col2">
                      <select name="crop" id="crop" className="input1" value={crop}
                        onChange={handleCropChange}>
                        <option value="Crop_Groundnut">Groundnut</option>
                        <option value="Crop_Maize">Maize</option>
                        <option value="Crop_Moong(Green Gram)">Moong(Green Gram)</option>
                        <option value="Crop_Rice">Rice</option>
                        <option value="Crop_cotton(lint)">cotton(lint)</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="rainfall">Rainfall(mm): </label>
                    </td>
                    <td className="col2">
                      <input
                        required
                        type="number"
                        step="any"
                        id="rainfall"
                        name="rainfall"
                        placeholder="Between 0.5 and 283"
                        className="input1"
                        min="0.5"
                        max={283}
                        value={rainfall}
                        onChange={handleRainfallChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="min_temp">Minimum Temperature(C): </label>
                    </td>
                    <td className="col2">
                      <input
                        required
                        type="number"
                        step="any"
                        id="min_temp"
                        name="min_temp"
                        placeholder="Between 2 and 40"
                        className="input1"
                        min={2}
                        max={40}
                        value={minTemp}
                        onChange={handleMinTempChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="max_temp">Maximum Temperature(C): </label>
                    </td>
                    <td className="col2">
                      <input
                        required
                        type="number"
                        step="any"
                        id="max_temp"
                        name="max_temp"
                        placeholder="Between 25 and 55"
                        className="input1"
                        min={25}
                        max={55}
                        value={maxTemp}
                        onChange={handleMaxTempChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="irrigation">Irrigation(MBGL): </label>
                    </td>
                    <td className="col2">
                      <input
                        required
                        type="number"
                        step="any"
                        id="irrigation"
                        name="irrigation"
                        placeholder="Between 1 and 33"
                        className="input1"
                        min={1}
                        max={33}
                        value={irrigation}
                        onChange={handleIrrigationChange}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label htmlFor="ph">Ph value: </label>
                    </td>
                    <td className="col2">
                      <input
                        required
                        type="number"
                        step="any"
                        id="ph"
                        name="ph"
                        placeholder="Between 0 and 14"
                        className="input1"
                        min={0}
                        max={14}
                        value={ph}
                        onChange={handlePhChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-sm-4">
              <div className='out'>{result && <p>{result}</p>}</div>
              <input type="submit"defaultValue="Submit" id="submit" />
            </div>
          </div>
        </form>
        
      </div>

    </>
  );
};

export default Yield;
