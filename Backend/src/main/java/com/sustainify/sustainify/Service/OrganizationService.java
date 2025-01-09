package com.sustainify.sustainify.Service;
import com.sustainify.sustainify.Model.User;
import com.sustainify.sustainify.Model.Organization;
import com.sustainify.sustainify.Repository.OrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizationService {

    @Autowired
    private OrganizationRepository organizationRepository;

    @Autowired
    private UserService userService;
    
    public Organization registerOrganization(Organization organization) {
        // Step 1: Create and save the Organization entity
        Organization MyOrganization = new Organization();
        organization.setOrgName(organization.getOrgName());
        organization.setLocation(organization.getLocation());
        organization.setEmail(organization.getEmail());
        organization.setEstablishedOn(organization.getEstablishedOn());
        organization.setIsProfit(organization.getIsProfit());
        organization.setContactNumber(organization.getContactNumber());
        organization.setContactPersonPosition(organization.getContactPersonPosition());
        organization.setContactPersonName(organization.getContactPersonName());
        organization.setContactPersonPhone(organization.getContactPersonPhone());
        organization.setContactPersonEmail(organization.getContactPersonEmail());

        // Step 2: Create the corresponding User entity and associate with Organization
        User user = userService.createUser(organization.getContactPersonEmail(), organization.getPassword(), "organization");
        organization.setUser(user);

        // Step 3: Save the Organization entity along with the User entity
        organizationRepository.save(MyOrganization);
        
        return organization;
    }


    public Organization getOrganizationById(Long id) {
        return organizationRepository.findById(id).orElse(null); // Return null if not found
    }
    public List<Organization> getAllOrganizations() {
        return organizationRepository.findAll();
    }
}