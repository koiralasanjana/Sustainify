package com.sustainify.sustainify.Service;

import com.sustainify.sustainify.Model.Organization;
import com.sustainify.sustainify.Repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizationService {

    @Autowired
    private OrganizationRepository organizationRepository;

    public void registerOrganization(Organization organization) {
        organizationRepository.save(organization); // Persist the organization
    }

    public Organization getOrganizationById(Long id) {
        return organizationRepository.findById(id).orElse(null); // Return null if not found
    }
    public List<Organization> getAllOrganizations() {
        return organizationRepository.findAll();
    }
}
