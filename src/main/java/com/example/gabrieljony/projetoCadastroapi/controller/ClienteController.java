package com.example.gabrieljony.projetoCadastroapi.controller;


import com.example.gabrieljony.projetoCadastroapi.model.Cliente;
import com.example.gabrieljony.projetoCadastroapi.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ClienteController {

    @Autowired
    ClienteRepository repository;

    @GetMapping("/clientes")
    public List<Cliente> getAllClientes() {
        System.out.println("Get todos Clientes...");

        List<Cliente> customers = new ArrayList<>();
        repository.findAll().forEach(customers::add);

        return customers;
    }

    @PostMapping(value = "/clientes/create")
    public Cliente postCliente(@RequestBody Cliente cliente) {

        Cliente _cliente = repository.save(new Cliente(cliente.getNome(), cliente.getCpf()));
        return _cliente;
    }

    @DeleteMapping("/clientes/{id}")
    public ResponseEntity<String> deleteCliente(@PathVariable("id") long id) {
        System.out.println("Delete Cliente com ID = " + id + "...");

        repository.deleteById(id);

        return new ResponseEntity<>("Cliente foi deletado!", HttpStatus.OK);
    }

    @DeleteMapping("/clientes/delete")
    public ResponseEntity<String> deleteTodosClientes() {
        System.out.println("Deletar todos os clientes...");

        repository.deleteAll();

        return new ResponseEntity<>("Todos os clientes foram deletados!", HttpStatus.OK);
    }

    @GetMapping(value = "clientes/cpf/{cpf}")
    public List<Cliente> findByCpf(@PathVariable long cpf) {

        List<Cliente> _clientes = repository.findByCpf(cpf);
        return _clientes;
    }

    @PutMapping("/clientes/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable("id") long id, @RequestBody Cliente cliente) {
        System.out.println("Update do Cliente com o ID = " + id + "...");

        Optional<Cliente> customerData = repository.findById(id);

        if (customerData.isPresent()) {
            Cliente _cliente = customerData.get();
            _cliente.setNome(cliente.getNome());
            _cliente.setCpf(cliente.getCpf());
            _cliente.setAtivo(cliente.isAtivo());
            return new ResponseEntity<>(repository.save(_cliente), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
