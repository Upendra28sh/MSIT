import {DateTimeFormatter} from 'js-joda';
import React, { Component } from 'react';
const LocalDate =require('js-joda').LocalDate;
var d =LocalDate.parse('2012-12-24').atStartOfDay().plusMonths(2).format(DateTimeFormatter.ofPattern('d MM yyyy'));
console.log(d);

export default class Schedule extends Component {
    constructor(props){
      super(props)
      this.state={
        date:"",
        name:""
      }
    }
    handleSubmit=(event)=>{
      event.preventDefault()
    }
    handleInputChange=(event)=>{
      event.preventDefault()
      this.setState({

        [event.target.name]: event.target.value
      })
    }
  render(){
    const {date,name}=this.state
    return(
      <div>
        <br/> <br/> <br/> <br/> <br/>
      {date.toString()}


      <h3 className='bold underlined' align= "center">j</h3>

      <section id="content" style={{marginBottom: '0px'}}>

        <div class="content-wrap">

          <div class="container clearfix">

            <div class="row clearfix">

              <div class="col-sm-8">




                <div class="row clearfix">

                  <div class="col-md-12">

                    <div
                      class="tabs tabs-alt clearfix ui-tabs ui-widget ui-widget-content ui-corner-all"
                      id="tabs-profile">



                      <div class="tab-container">

                        <div
                          class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom"
                          id="tab-feeds" aria-labelledby="ui-id-1" role="tabpanel"
                          aria-hidden="false">

                          <div class="table-responsive">


                            <div>
                                <table id="customers">
                        <tbody>
                          <tr id="first">
                            <th>S.No</th>
                            <th>Vaccine</th>
                            <th>Prevents</th>
                            <th>Dose 1</th>
                            <th>Dose 2</th>
                            <th>Dose 3</th>
                            <th>Dose 4</th>
                            <th>Dose 5</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>BCG</td>
                            <td>TB &amp; bladder cancer</td>
                            <td>Birth</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>HepB</td>
                            <td>Hepatitis B</td>
                            <td>Birth</td>
                            <td>4 weeks</td>
                            <td>8 weeks</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Poliovirus</td>
                            <td>Polio</td>
                            <td>Birth</td>
                            <td>4 weeks</td>
                            <td>4 weeks</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>DTP</td>
                            <td>Diphtheria, Tetanus &amp; Pertussis</td>
                            <td>6 weeks</td>
                            <td>4 weeks</td>
                            <td>4 weeks</td>
                            <td>6 months (Booster 1)</td>
                            <td>3 years (Booster 2)</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Hib</td>
                            <td>Infections caused by Bacteria</td>
                            <td>6 weeks</td>
                            <td>4 weeks</td>
                            <td>4 weeks</td>
                            <td>6 months (Booster 1)</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>PCV</td>
                            <td>Pneumonia</td>
                            <td>6 weeks</td>
                            <td>4 weeks</td>
                            <td>4 weeks</td>
                            <td>6 months (Booster 1)</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>RV</td>
                            <td>Severe Diarrheal Disease</td>
                            <td>6 weeks</td>
                            <td>4 weeks</td>
                            <td>4 weeks</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>8</td>
                            <td>Typhoid</td>
                            <td>Typhoid Fever, Diarrhea</td>
                            <td>9 months</td>
                            <td>15 months (Booster 1)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>9</td>
                            <td>MMR</td>
                            <td>Measles, Mumps &amp; Rubella</td>
                            <td>9 months</td>
                            <td>6 months</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>10</td>
                            <td>Varicella</td>
                            <td>Chickenpox</td>
                            <td>1 year</td>
                            <td>3 months</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>11</td>
                            <td>HepA</td>
                            <td>Liver disease</td>
                            <td>1 year</td>
                            <td>6 months</td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>12</td>
                            <td>Tdap</td>
                            <td>Diphtheria, Tetanus &amp; Pertussis</td>
                            <td>7 years</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>13</td>
                            <td>HPV</td>
                            <td>Some Cancers &amp; Warts</td>
                            <td>9 years</td>
                            <td>For Child aged 9-14 years: 6 months. For Child
                              aged 15 or more: 1 month</td>
                            <td>For Child aged 15 or more: 5 months</td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>													</div>






                            <h4> <b>
                            </b></h4>
                            <div>
                             <table id="customer">
                        <tbody>
                          <tr id="first">
                            <th id="top">S.No</th>
                            <th id="top">Vaccine</th>
                            <th id="top">Prevents</th>
                            <th id="top">Dose 1</th>
                            <th id="top">Dose 2</th>
                            <th id="top">Dose 3</th>
                            <th id="top">Dose 4</th>
                            <th id="top">Dose 5</th>
                          </tr>
                          <tr>
                                  <td>1</td>
                                  <td>BCG</td>
                                  <td>TB &amp; bladder cancer</td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>HepB</td>
                                  <td>Hepatitis B</td>
                                  <td>dob.plusDays(0).toString("dd/MM/yyyy")%></td>
                                  <td>dob.plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td>(dob.plusWeeks(4)).plusWeeks(8).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>Poliovirus</td>
                                  <td>Polio</td>
                                  <td> dob.plusDays(0).toString("dd/MM/yyyy")%></td>
                                  <td> dob.plusDays(0).plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusDays(0).plusWeeks(4)).plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>DTP</td>
                                  <td>Diphtheria, Tetanus &amp; Pertussis</td>
                                  <td> dob.plusWeeks(6).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).plusWeeks(4).plusMonths(6).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).plusWeeks(4).plusMonths(6).plusYears(3).toString("dd/MM/yyyy")%></td>
                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>Hib</td>
                                  <td>Infections caused by Bacteria</td>
                                  <td> dob.plusWeeks(6).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).plusWeeks(4).plusMonths(6).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>PCV</td>
                                  <td>Pneumonia</td>
                                  <td> dob.plusWeeks(6).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).plusWeeks(4).plusMonths(6).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>7</td>
                                  <td>RV</td>
                                  <td>Severe Diarrheal Disease</td>
                                  <td> dob.plusWeeks(6).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusWeeks(6)).plusWeeks(4).plusWeeks(4).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>8</td>
                                  <td>Typhoid</td>
                                  <td>Typhoid Fever, Diarrhea</td>
                                  <td> dob.plusMonths(9).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusMonths(9)).plusMonths(15).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>9</td>
                                  <td>MMR</td>
                                  <td>Measles, Mumps &amp; Rubella</td>
                                  <td> dob.plusMonths(9).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusMonths(9)).plusMonths(6).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>10</td>
                                  <td>Varicella</td>
                                  <td>Chickenpox</td>
                                  <td> dob.plusMonths(12).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusMonths(12)).plusMonths(3).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>11</td>
                                  <td>HepA</td>
                                  <td>Liver disease</td>
                                  <td> dob.plusMonths(12).toString("dd/MM/yyyy")%></td>
                                  <td> (dob.plusMonths(12)).plusMonths(6).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>12</td>
                                  <td>Tdap</td>
                                  <td>Diphtheria, Tetanus &amp; Pertussis</td>
                                  <td> dob.plusYears(7).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td>13</td>
                                  <td>HPV</td>
                                  <td>Some Cancers &amp; Warts</td>
                                  <td> dob.plusYears(9).toString("dd/MM/yyyy")%></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>


                      </table>													</div>




                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              </div>

              <div class="col-sm-4 clearfix">
                <div class="tab-container">
                  <br/> <br/> <br/> <br/>

                  <div
                    class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom"
                    id="tab-feeds" aria-labelledby="ui-id-1" role="tabpanel"
                    aria-hidden="false">




                    <div class="fancy-title topmargin title-border">
                      <h4>About Us</h4>
                    </div>

                    <p>Our aim is to increase immunisation for children by
                      providing timely vaccination reminders to parents and
                      spreading awareness.</p>



                  </div>
                </div>
                <br/> <br/>



                <div class="tab-container">

                  <div
                    class="tab-content clearfix ui-tabs-panel ui-widget-content ui-corner-bottom"
                    id="tab-feeds" aria-labelledby="ui-id-1" role="tabpanel"
                    aria-hidden="false">




                    <div class="fancy-title topmargin title-border">
                      <h4>fill in the form to know the date of vaccine schedule</h4>
                    </div>


                    <form onSubmit={this.handleSubmit} >


                      NAME:<input id="txtName" type="text" name="name" value={name} onChange={this.handleInputChange}  />
                      <span id="spmsg" style={{display: 'none', color: 'red', fontSize:'13px'}}></span><br/>
                      DATE:
                      <input   type="text" id="thullu" name="date" onChange={this.handleInputChange}  value={date}/>
                      <span id="msg" style={{display:'none',color:'red',fontSize:'13px'}}><br/></span>
                      <button type="Submit" name="submit"/>

                    </form>


                  </div>
                </div>
              </div>




            </div>

          </div>
        </div>

      </section>


      </div>
    );
  }
}
