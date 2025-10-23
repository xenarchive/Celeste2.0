// Two Instagram placeholders will be rendered below. Replace the `href` values
// with your actual Instagram profile links (e.g. https://instagram.com/yourhandle).

export default function Footer() {
	return (
			<footer id="contact" className="w-full border-t border-white/10 bg-black text-white">
				<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
					<div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
					{/* Brand + description */}
					<div className="md:col-span-4">
												<a href="#" className="mb-4 inline-block">
													<h3 className="font-robert-medium text-2xl tracking-tight">Celesté 2.0</h3>
												</a>
												<p className="max-w-md text-sm text-white/70">
							A celebration of sound, vision and craft. Join our community for events,
							exhibitions and limited releases. Built with love and a touch of starlight.
						</p>

									<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
										{/* Insta handle 1 */}
										<a href="https://www.instagram.com/pravasana_heritage?igsh=MWJtZ3k2MTV5a3RycQ%3D%3D" aria-label="Instagram handle 1" className="flex items-center gap-2 text-sm text-white/70 hover:text-white">
											<span className="inline-flex size-6 items-center justify-center rounded-md bg-white/5">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
													<path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
													<path d="M12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM17.75 6.25a1 1 0 110 2 1 1 0 010-2z" />
												</svg>
											</span>
											<span>Pravasana</span>
										</a>

										{/* Insta handle 2 */}
										<a href="https://www.instagram.com/celeste_pravasana?igsh=bXVtZnQxY24yd2Jp" aria-label="Instagram handle 2" className="flex items-center gap-2 text-sm text-white/70 hover:text-white">
											<span className="inline-flex size-6 items-center justify-center rounded-md bg-white/5">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
													<path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z" />
													<path d="M12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM17.75 6.25a1 1 0 110 2 1 1 0 010-2z" />
												</svg>
											</span>
											<span>Celesté 2.0</span>
										</a>
									</div>
					</div>

					{/* Navigation columns */}
					  <div className="grid grid-cols-2 items-center gap-6 md:col-span-5">
						<div>
							  <h4 className="mb-3 font-robert-medium text-sm"></h4>
							<ul className="space-y-2 text-sm text-white/70">
								<li><a href="#about" className="hover:text-white"></a></li>
								<li><a href="#events" className="hover:text-white"></a></li>
								<li><a href="#gallery" className="hover:text-white"></a></li>
								<li><a href="#contact" className="hover:text-white"></a></li>
							</ul>
						</div>
					</div>

					{/* Newsletter */}
											<div className="md:col-span-3">
												<h4 className="mb-3 font-robert-medium text-sm">Join the list</h4>
												<p className="mb-4 text-sm text-white/70">Get occasional updates about new events and releases.</p>

									<form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
							<label htmlFor="email" className="sr-only">Email address</label>
														<input id="email" type="email" placeholder="you@domain.com" className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-violet-300" />
														<button type="submit" className="rounded-md bg-violet-300 px-4 py-2 font-robert-medium text-black transition hover:brightness-95">Subscribe</button>
						</form>

									<p className="mt-3 text-xs text-white/50">We’ll never share your email. Unsubscribe anytime.</p>
					</div>
				</div>

							<div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
					<p className="text-sm text-white/60">© {new Date().getFullYear()} Celesté 2.0. All rights reserved.</p>
					<div className="flex items-center gap-4 text-sm text-white/60">
						<a href="#" className="hover:text-white">Privacy</a>
						<span className="hidden sm:inline">·</span>
						<a href="#" className="hover:text-white">Terms</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
