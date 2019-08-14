import * as React from 'react';

export default class Tools extends React.Component {
    render() {
        return (
<div>
      <h1>Campaign Finance Search</h1>
      <p>This tool displays a campaign finance breakdown for the candidate you select. All data represents contributions as reported to the State of Iowa Ethics and Campaign Disclosure Board (IECD). It includes all state and local candidates in Iowa who report to the IECD. It does not include contributions to federal level candidates (e.g., US Senators or US Representatives) as those contributions are reported to the Federal Election Commission. Data is most up to date after reporting deadlines for candidates and committees. See <a href="https://ethics.iowa.gov/reports/campaign-due-dates/campaign-reporting-deadlines">this listing of Iowa Ethics reporting deadlines for more information.</a></p>
        <h2>Search for a Candidate</h2>
        <label for="candidate name">Candidate Name:</label>
     <input type="search" id="myInput" oninput="oninputFunct(this.value)" placeholder="Name..." name="search" accesskey="c" tabindex="1" type="search">
  <p id="oninput-box-output"></p></input>
    
      <div>Click here to <a href="https://gis.legis.iowa.gov/FYL/index.html" target="_blank">find your legislator</a></div>
      <div class="candidateGraph">
        <h2>Campaign Finance Graph</h2>
        <figure id="piechart"></figure>
      </div>
      <div id="candidateCompanies">
        <h2> Top 5 Company and Other Entities Donors:</h2>
        <ol id="company">list goes here
        </ol>
      </div>
      <div id="candidateCompanies">
        <h2> Top 5 Individual Donors:</h2>
        <ol id="individual">list goes here
        </ol>
      </div>
  <p>This page draws from publicly available information available at <a href="https://webapp.iecdb.iowa.gov/publicview/NewContributionSearch.aspx"> the IECD search page</a> and it's underlying data available at <a href="https://data.iowa.gov/Government/Iowa-Campaign-Contributions-Received/smfg-ds7h"> the State of Iowa data website.</a>  This tool is intended for informational purposes only. This information is only as accurate as the underlying data.</p>
</div>
);
   }
}