import { Link } from "react-router-dom";

export default function ProductCard(props: any) {
	return (
		<div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<Link
					to={"/productDetail?id=" + props.product.id}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button className="btn btn-danger" onClick={() => props.delete(props.product.id)}> Delete </button>
			</div>
		</div>
	);
}
