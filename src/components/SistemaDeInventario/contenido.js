import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { FaBox, FaClipboardList, FaCubes, FaShoppingCart, FaChartBar } from 'react-icons/fa';
import Entrada from '../../pages/MenuPrincipal/entradas';
import Salida from '../../pages/MenuPrincipal/salidas';
import Producto from '../../pages/MenuPrincipal/productos';
import Pedido from '../../pages/MenuPrincipal/pedidos';
import Reporte from '../../pages/MenuPrincipal/reportes';
import Categoria from '../../pages/MenuSecundario/Categorias';
import Proveedores from '../../pages/MenuSecundario/Proveedores';
import Clientes from '../../pages/MenuSecundario/Clientes';

const TabContentComponent = ({ activeTab, setActiveTab }) => (
  <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
    <Nav variant="tabs" className="custom-tab-border">
      {/* Pestañas del Menú Principal */}
      <Nav.Item>
        <Nav.Link eventKey="entradas" style={{ backgroundColor: activeTab === "entradas" ? '#C6F8CF' : 'transparent', color: activeTab === "entradas" ? '#232D47' : '#C6F8CF', border: 'none' }}>
          <FaBox className="me-2" style={{ color: activeTab === "entradas" ? '#232D47' : '#C6F8CF' }} />Entradas
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="salidas" style={{ backgroundColor: activeTab === "salidas" ? '#C6F8CF' : 'transparent', color: activeTab === "salidas" ? '#232D47' : '#C6F8CF', border: 'none' }}>
          <FaClipboardList className="me-2" style={{ color: activeTab === "salidas" ? '#232D47' : '#C6F8CF' }} />Salidas
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="productos" style={{ backgroundColor: activeTab === "productos" ? '#C6F8CF' : 'transparent', color: activeTab === "productos" ? '#232D47' : '#C6F8CF', border: 'none' }}>
          <FaCubes className="me-2" style={{ color: activeTab === "productos" ? '#232D47' : '#C6F8CF' }} />Productos
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="pedidos" style={{ backgroundColor: activeTab === "pedidos" ? '#C6F8CF' : 'transparent', color: activeTab === "pedidos" ? '#232D47' : '#C6F8CF', border: 'none' }}>
          <FaShoppingCart className="me-2" style={{ color: activeTab === "pedidos" ? '#232D47' : '#C6F8CF' }} />Pedidos
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="reportes" style={{ backgroundColor: activeTab === "reportes" ? '#C6F8CF' : 'transparent', color: activeTab === "reportes" ? '#232D47' : '#C6F8CF', border: 'none' }}>
          <FaChartBar className="me-2" style={{ color: activeTab === "reportes" ? '#232D47' : '#C6F8CF' }} />Reportes
        </Nav.Link>
      </Nav.Item>
    </Nav>

    <Tab.Content>
      {/* Contenido de las pestañas del Menú Principal */}
      <Tab.Pane eventKey="entradas"><Entrada /></Tab.Pane>
      <Tab.Pane eventKey="salidas"><Salida /></Tab.Pane>
      <Tab.Pane eventKey="productos"><Producto /></Tab.Pane>
      <Tab.Pane eventKey="pedidos"><Pedido /></Tab.Pane>
      <Tab.Pane eventKey="reportes"><Reporte /></Tab.Pane>
    </Tab.Content>

    <Tab.Content>
      {/* Contenido de las pestañas del Menú Secundario */}
      <Tab.Pane eventKey="categoria"><Categoria /></Tab.Pane>
      <Tab.Pane eventKey="proveedores"><Proveedores /></Tab.Pane>
      <Tab.Pane eventKey="clientes"><Clientes /></Tab.Pane>
    </Tab.Content>

  </Tab.Container>
);

export default TabContentComponent;
