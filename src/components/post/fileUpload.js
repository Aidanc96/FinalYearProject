import React, { Component } from "react";

class FileUpload extends Component {
	constructor() {
		super();

		this.state = {
			uploadValue: 0
		};
	}

	render() {
		return (
			<div>
				<input type="file" onChange={this.props.onUpload} />

				<br />

				<progress value={this.state.uploadValue} max="100" />
			</div>
		);
	}
}

export default FileUpload;
