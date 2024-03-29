'use client'
const { Form, FormGroup, FormLabel, FormSelect, Button } = require("react-bootstrap")

const TourSearch = () => {
    return (
        <Form className="bg-dark d-flex flex-column flex-md-row align-items-center justify-center gap-4">
            <FormGroup className="w-100">
                <FormLabel className="text-light">País</FormLabel>
                <FormSelect className="bg-dark text-light">
                    <option selected className="text-light">--País--</option>
                    <option value="España" className="text-light">España</option>
                    <option value="Portugal" className="text-light">Portugal</option>
                </FormSelect>
            </FormGroup>
            <FormGroup className="w-100">
                <FormLabel className="text-light">Ciudad</FormLabel>
                <FormSelect className="bg-dark text-light">
                    <option selected className="text-light">--Ciudad--</option>
                    <option value="Madrid" className="text-light">Madrid</option>
                    <option value="Oporto" className="text-light">Oporto</option>
                </FormSelect>
            </FormGroup>
            <Button type="submit" variant="primary" size="sm" className="align-self-end w-100" style={{"height": "50%"}}>Buscar</Button>
        </Form>
    )
}

export default TourSearch