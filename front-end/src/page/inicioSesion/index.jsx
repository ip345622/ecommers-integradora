import './login.css'

const inicioSesion = () => {
  return (
    <div className='cuerpo'>	
		<div className="section flex items-center justify-center">
			<div className="container sh">
				<div className="row full-height justify-content-center">
					<div className="col-12 text-center align-self-center py-5">
						<div className="section pb-5 pt-5 pt-sm-2 text-center">
							<h6 className="mb-0 pb-3 text-xl"><span>Log In </span><span>Sign Up</span></h6>
				          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
				          	<label for="reg-log"></label>
							<div className="card-3d-wrap mx-auto">
								<div className="card-3d-wrapper shadow-2xl">
									<div className="card-front">
										<div className="center-wrap">
											<form className="section text-center" id='form1'>
												<h4 className="mb-4 pb-3 text-3xl font-medium">Log In</h4>
												<div className="form-group">
													<input type="text" name="email-l" className="form-style" placeholder="Your User Name" id="email-l" autocomplete="off"/>
													<i className="input-icon uil uil-at"></i>
												</div>	
												<div className="form-group mt-2">
													<input type="password" name="password-l" className="form-style" placeholder="Your Password" id="password-l" autocomplete="off"/>
													<i className="input-icon uil uil-lock-alt"></i>
												</div>
												<button className='font-medium bg-[#8F2C02] text-white py-2 px-7 mt-8 rounded-lg hover:bg-[#ffeba7] hover:text-black'>Log In</button>
    	                        				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>

												<p className='w-40 text-center m-auto text-red-500' id='warnings'></p>
					      					</form>
				      					</div>
				      				</div>
									<div className="card-back">
										<div className="center-wrap">
											<form className="section text-center" id='form2'>
												<h4 className="mb-4 pb-3 text-xl">Sign Up</h4>
												<div className="form-group">
													<input type="text" name="name-R" className="form-style" placeholder="Your first name" id="name-R" autocomplete="off"/>
													<i className="input-icon uil uil-user"></i>
												</div>	
												<div className="form-group my-2">
													<input type="text" name="lastName-R" className="form-style" placeholder="Your last name" id="lastName-R" autocomplete="off"/>
													<i className="input-icon uil uil-user"></i>
												</div>	
												<div className="form-group mt-2">
													<input type="email" name="email-R" className="form-style" placeholder="Your Email" id="email-R" autocomplete="off"/>
													<i className="input-icon uil uil-at"></i>
												</div>	
												<div className="form-group mt-2">
													<input type="text" name="state-R" className="form-style" placeholder="State" id="state-R" autocomplete="off"/>
													<i className="input-icon uil uil-lock-alt"></i>
												</div>
												<div className="form-group mt-2">
													<input type="text" name="city-R" className="form-style" placeholder="Your city" id="city-R" autocomplete="off"/>
													<i className="input-icon uil uil-lock-alt"></i>
												</div>
												<div className="form-group mt-2">
													<input type="text" name="postCode-R" className="form-style" placeholder="Your postal code" id="postCode-R" autocomplete="off"/>
													<i className="input-icon uil uil-lock-alt"></i>
												</div>
												<div className="form-group mt-2">
													<input type="password" name="password-R" className="form-style" placeholder="Your Password" id="password-R" autocomplete="off"/>
													<i className="input-icon uil uil-lock-alt"></i>
												</div>
												<button className='font-medium bg-[#8F2C02] text-white py-2 px-7 mt-8 rounded-lg hover:bg-[#ffeba7] hover:text-black'>Log In</button>
					      					</form>
				      					</div>
				      				</div>
				      			</div>
				      		</div>
				      	</div>
			      	</div>
		      	</div>
		    </div>
		</div>
    </div>
  )
}

export default inicioSesion

