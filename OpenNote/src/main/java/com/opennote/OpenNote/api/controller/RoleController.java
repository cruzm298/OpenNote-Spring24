package com.opennote.OpenNote.api.controller;

import com.opennote.OpenNote.api.model.Role;
import com.opennote.OpenNote.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class RoleController {
    private final RoleService roleService;

    @Autowired
    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping("/role")
    public Role getRole(@RequestParam Integer roleId) {
        Optional<Role> role = roleService.getRole(roleId);
        return role.orElse(null);
    }

    @GetMapping("/roleset")
    public void setRole() {
        roleService.initializeRoles();
    }
}
